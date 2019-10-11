/*Author:  Rishab Mantri
  Initial Creation:  September 21, 2019
  Last Modified:  Rishab Mantri
  Modified date:  October 10,2019
  About:  overrides routes to send props
*/
import React from "react";
import { Route } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) =>
    <Route {...rest} render={props => <C {...props} {...cProps} />} />;
