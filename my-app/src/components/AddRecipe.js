/*Author: Harshita Kajal
Date added: Sep 29, 2019
Date modified : Sept 30, 2019
*/

import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
export default class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            Hops: "",
            Malt: "",
            Yeast: "",
            IBU: ""  
        };
    }
    }
  }
  
