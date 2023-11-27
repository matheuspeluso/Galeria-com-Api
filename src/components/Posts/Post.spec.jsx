import { render , screen} from '@testing-library/react';

import {Posts} from ".";

const props = {
    posts:[
        {
            id: 1,
            title: "title1",
            body: "body 1",
            cover: "img/img1.png"

        },
        {
            id: 2,
            title: "title2",
            body: "body 2",
            cover: "img/img2.png"

        },
        {
            id: 3,
            title: "title3",
            body: "body 3",
            cover: "img/img3.png"

        },
    ]
}
describe('<Posts/>', () => {
    it('should render posts', () => {
      render(<Posts {...props} />);
  
      expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
      expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
      expect(screen.getAllByText(/body/i)).toHaveLength(3);
  
      expect(screen.getByRole('img', { name: /title3/i })).toHaveAttribute('src', 'img/img3.png');
    });

    it('sbould match snapshot', () => {
      const {container} = render(<Posts {...props} />);

      expect(container.firstChild).toMatchSnapshot()
    });
  });
  


