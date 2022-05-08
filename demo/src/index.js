/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                                                 *
 *    @digidockage/react-conditional-wrap                                                          *
 *    Copyright (c) 2021 Sgobbi Federico                                                           *
 *    All rights reserved                                                                          *
 *                                                                                                 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// > > > > > > > > > > > > > > > > > > > > > > > Import externals
import React from 'react';
import { render } from 'react-dom';

// > > > > > > > > > > > > > > > > > > > > > > > Import internals
import SwitchWrap from '../../src';

// > > > > > > > > > > > > > > > > > > > > > > > The code
const getRandomSelect = () => {
  const values = [
    "one",
    "two",
    "three",
    "four"
  ];

  return values[Math.floor(Math.random() * values.length)];
};

const OneWrapComponent = ({ children }) => {
  return (
    <React.Fragment>
      <h3>When one</h3>
      {children}
    </React.Fragment>
  );
};

const TwoWrapComponent = ({ children }) => {
  return (
    <React.Fragment>
      <h3>When two</h3>
      {children}
    </React.Fragment>
  );
};

const ThreeWrapComponent = ({ children }) => {
  return (
    <React.Fragment>
      <h3>When three</h3>
      {children}
    </React.Fragment>
  );
};

const DefaultWrapComponent = ({ children }) => {
  return (
    <React.Fragment>
      <h3>When default</h3>
      {children}
    </React.Fragment>
  );
};

const WrappedComponent = ({ id, parentExtraProp, childExtraProp }) => {
  return (
    <span>
      {" i'm the wrapped content " + id + ", my parentExtraProp=" + parentExtraProp + ", my childExtraProp=" + childExtraProp}
    </span>
  );
};

const Demo = () => {
  const select = getRandomSelect();

  return (
    <React.Fragment>
      <h1>SwitchWrap using variable</h1>
      <SwitchWrap
        when={select}
        wraps={
          {
            "one": OneWrapComponent,
            "two": TwoWrapComponent,
            "three": ThreeWrapComponent
          }
        }
        defaultWrap={DefaultWrapComponent}
        parentExtraProp={getRandomSelect()}
      >
        <WrappedComponent id={1} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={2} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={3} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={4} childExtraProp={getRandomSelect()} />
      </SwitchWrap>

      <h1>SwitchWrap using function to check parent's prop</h1>
      <SwitchWrap
        when={({ parentExtraProp }) => { return parentExtraProp }}
        wraps={
          {
            "one": OneWrapComponent,
            "two": TwoWrapComponent,
            "three": ThreeWrapComponent
          }
        }
        defaultWrap={DefaultWrapComponent}
        parentExtraProp={getRandomSelect()}
      >
        <WrappedComponent id={1} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={2} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={3} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={4} childExtraProp={getRandomSelect()} />
      </SwitchWrap>

      <h1>SwitchWrap using function to check children prop</h1>
      <SwitchWrap
        when={({ childExtraProp }) => { return childExtraProp }}
        wraps={
          {
            "one": OneWrapComponent,
            "two": TwoWrapComponent,
            "three": ThreeWrapComponent
          }
        }
        defaultWrap={DefaultWrapComponent}
        parentExtraProp={getRandomSelect()}
      >
        <WrappedComponent id={1} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={2} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={3} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={4} childExtraProp={getRandomSelect()} />
      </SwitchWrap>

      <h1>SwitchWrap using function to check mixed props</h1>
      <SwitchWrap
        when={({ parentExtraProp, childExtraProp }) => { return parentExtraProp && childExtraProp }}
        wraps={
          {
            "one": OneWrapComponent,
            "two": TwoWrapComponent,
            "three": ThreeWrapComponent
          }
        }
        defaultWrap={DefaultWrapComponent}
        parentExtraProp={getRandomSelect()}
      >
        <WrappedComponent id={1} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={2} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={3} childExtraProp={getRandomSelect()} />
        <WrappedComponent id={4} childExtraProp={getRandomSelect()} />
      </SwitchWrap>
    </React.Fragment>
  );
}

render(<Demo />, document.querySelector('#demo'));
