import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../../main/components/Home'

describe('Home', () => {
  const homeComponentWrapper = shallow(<HomeComponent />);
  const mainComponent = homeComponentWrapper.find('.main-content');
  const routeTo = jest.fn();

  it('Should have initial state', () => {
    expect(mainComponent.find('label').first().text()).toEqual('Name:');
    expect(mainComponent.find('input').first().text()).toEqual('');
    expect(mainComponent.find('label').at(1).text()).toEqual('Email:');
    expect(mainComponent.find('input').at(1).text()).toEqual('');
  });
});
