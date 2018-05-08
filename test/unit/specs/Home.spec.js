import { shallow } from '@vue/test-utils'
import Home from '@/pages/Home.vue'
import { mockCharacters } from './__mocks__/home.data';

describe('Home.vue', () => {
  
    let page = null;
  
    beforeEach(() => {
        page = shallow(Home)
    });
  
    it('should have mounted', () => {
        expect(page.element.className).toEqual("Home");
    });
  
    it('matches snapshot', () => {
      expect(page.html()).toMatchSnapshot();
    });
  })
  