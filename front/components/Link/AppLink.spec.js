import AppButton from './AppButton.vue'

describe('AppButton', () => {
  describe('template', () => {
    it('should match snapshot', () => {
      // When
      const wrapper = shallowMount(AppButton)

      // Then
      expect(wrapper).toMatchSnapshot()
    })

    it('should have disabled css attributes when button is disabled', () => {
      // Given
      const propsData = {
        isDisabled: true,
        color: 'blue',
        backgroundColor: 'red',
        text: 'text',
        title: 'title',
      }

      // When
      const wrapper = shallowMount(AppButton, { propsData })

      // Then
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('events', () => {
    it('should emit click on click on button by default', () => {
      // Given
      const wrapper = shallowMount(AppButton)

      // When
      wrapper.find('button').trigger('click')

      // Then
      expect(wrapper).toEmit('click')
    })
  })
})
