import Home from '@/components/modules/Home/Home';

jest.mock('@/components/modules/Home/Map/Map', () => () => ({
  Map: '<div data-test="map"/>',
}));

describe('Home', () => {
  it('should match snapshot', () => {
    // When
    const wrapper = shallowMount(Home);

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});
