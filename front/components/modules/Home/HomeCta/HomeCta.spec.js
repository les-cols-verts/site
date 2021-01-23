import HomeCta from '@/components/modules/Home/HomeCta/HomeCta';

describe('HomeCta', () => {
  it('should match snapshot', () => {
    // When
    const wrapper = shallowMount(HomeCta);

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});
