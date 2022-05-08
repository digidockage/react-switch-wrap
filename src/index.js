/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                                                 *
 *    @digidockage/react-switch-wrap                                                               *
 *    Copyright (c) 2021 Sgobbi Federico                                                           *
 *    All rights reserved                                                                          *
 *                                                                                                 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// > > > > > > > > > > > > > > > > > > > > > > > Import externals
import React from 'react';

// > > > > > > > > > > > > > > > > > > > > > > > The code
const defaultWrapFunc = ({ children }) => {
  return children;
};

const defaultChildren = (
  <React.Fragment />
);

const SwitchWrap = ({
  when = "",
  wraps = {},
  defaultWrap = defaultWrapFunc,
  children = defaultChildren,
  ...rest
}) => {
  return (
    <React.Fragment>
      {
        React.Children.map(children, (child) => {
          child = (rest) ? React.cloneElement(child, rest) : child;

          var selector = when;
          if (typeof selector === 'function') {
            selector = selector({ ...rest, ...child.props });
          }

          if (typeof selector === 'string' && selector in wraps) {
            return wraps[selector]({ ...rest, ...child.props, children: child });
          }

          return defaultWrap({ ...rest, ...child.props, children: child });
        })
      }
    </React.Fragment>
  );
};

// > > > > > > > > > > > > > > > > > > > > > > > Module exports
export default SwitchWrap;
