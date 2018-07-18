import { mount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import VModal from 'vue-js-modal';

const localVue = createLocalVue();
localVue.use(VModal);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(HelloWorld, {
      localVue,
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
