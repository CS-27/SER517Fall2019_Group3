import functools

import pymongo

class MongoDB(AbstractDB):

    def __init__(self, host='localhost', name=None,
                 port=None, username=None, password=None, serverSelectionTimeoutMS=5000):
        """Init method, see attributes of :class:`AbstractDB`."""
        self.uri = None

        if port is not None:
            port = int(port)
        else:
            port = pymongo.MongoClient.PORT

        super(MongoDB, self).__init__(host, name, port, username, password,
                                      serverSelectionTimeoutMS=serverSelectionTimeoutMS,
                                      authSource=name)

    @mongodb_exception_wrapper
    def initiate_connection(self):
        if self.is_connected:
            return

        self._sanitize_attrs()

        self._conn = pymongo.MongoClient(self.uri if self.uri else self.host,
                                         port=self.port,
                                         username=self.username,
                                         password=self.password,
                                         **self.options)
        self._db = self._conn[self.name]
        self._db.command('ismaster')  # .. seealso:: :meth:`is_connected`


    @property
    def is_connected(self):
        """True, if practical connection has been achieved.

        .. note:: MongoDB does not do this automatically when creating the client.
        """
        try:
            self._db.command('ismaster')
        except (pymongo.errors.ConnectionFailure,
                pymongo.errors.OperationFailure,
                TypeError, AttributeError):
            _is_connected = False
        else:
            _is_connected = True
        return _is_connected

    def close_connection(self):
        """Disconnect from database."""
        self._conn.close()

    def read(self, collection_name, query=None, selection=None):
        """Read a collection and return a value according to the query.

        .. seealso:: :meth:`AbstractDB.read` for argument documentation.

        """
        dbcollection = self._db[collection_name]

        cursor = dbcollection.find(query, selection)
        dbdocs = list(cursor)

        return dbdocs


    @mongodb_exception_wrapper
    def read_and_write(self, collection_name, query, data, selection=None):
        """Read a collection's document and update the found document.

        Returns the updated document, or None if nothing found.

        .. seealso:: :meth:`AbstractDB.read_and_write` for
                     argument documentation.

        """
        dbcollection = self._db[collection_name]

        update_data = {'$set': data}

        dbdoc = dbcollection.find_one_and_update(
            query, update_data, projection=selection,
            return_document=pymongo.ReturnDocument.AFTER)

        return dbdoc


    def count(self, collection_name, query=None):
        """Count the number of documents in a collection which match the `query`.

        .. seealso:: :meth:`AbstractDB.count` for argument documentation.

        """
        dbcollection = self._db[collection_name]
        if hasattr(dbcollection, 'count_documents'):
            return dbcollection.count_documents(filter=query if query else {})

        return dbcollection.count(filter=query)


    def remove(self, collection_name, query):
        """Delete from a collection document[s] which match the `query`.

        .. seealso:: :meth:`AbstractDB.remove` for argument documentation.

        """
        dbcollection = self._db[collection_name]

        result = dbcollection.delete_many(filter=query)
        return result.deleted_count
