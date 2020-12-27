import Footer from '@/components/modules/Footer/Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    // When
    const wrapper = shallowMount(Footer);

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});
