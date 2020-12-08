import index from '@/pages/index.vue';

jest.mock('@/components/modules/Home/Map/Map', () => () => ({
  Map: '<div data-test="map"/>',
}));

describe('index', () => {
  it('should match snapshot', () => {
    // When
    const wrapper = shallowMount(index);

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});
