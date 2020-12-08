import AppLink from './AppLink.vue';

describe('AppLink', () => {
  describe('template', () => {
    it('should match snapshot', () => {
      // When
      const wrapper = shallowMount(AppLink);

      // Then
      expect(wrapper).toMatchSnapshot();
    });

    it('should have disabled css attributes when button is disabled', () => {
      // Given
      const propsData = {
        isDisabled: true,
        color: 'blue',
        backgroundColor: 'red',
        text: 'text',
        title: 'title',
      };

      // When
      const wrapper = shallowMount(AppLink, { propsData });

      // Then
      expect(wrapper).toMatchSnapshot();
    });
  });
});
