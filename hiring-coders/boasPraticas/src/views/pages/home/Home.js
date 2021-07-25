import homeSectionOne  from '../../components/sections/homeSectionOne';
import homesectionTwo from '../../components/sections/homeSectionTwo'

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <h1>Gama Academy</div>
            ${homeSectionOne}
            ${homesectionTwo}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;