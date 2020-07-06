import React from 'react';
import { ActionSchemaRenderer } from '../ActionSchemaRenderer';
import { shallow } from 'enzyme';
import { getActionSchemaData } from '../../../../__test_data__/action-schema';

describe('ActionSchemaRenderer', () => {
  const schema = getActionSchemaData();
  it('should render', () => {
    const wrapper = shallow(
      <ActionSchemaRenderer
        schema={schema}
        actionId="action-id"
        actionSetId="action-set-id"
      />,
    );
    expect(wrapper).toBeTruthy();
  });
});
