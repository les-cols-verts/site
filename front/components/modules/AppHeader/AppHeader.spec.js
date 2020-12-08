import AppHeader from '@/components/modules/AppHeader/AppHeader';

describe('AppHeader', () => {
  it('should match snapshot', () => {
    // When
    const wrapper = shallowMount(AppHeader);

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});
