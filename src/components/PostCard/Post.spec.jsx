import { render, screen } from "@testing-library/react";
import {PostCard} from "./index.jsx";
import {postCardPropsMock} from "./mock.js";

const props = postCardPropsMock;

describe('<PostCard/>', ()=>{
    it('should render PostCard correctly',()=>{
    //    const {debug} = render(<PostCard {...props}/>) //descrutructing na imagem
    //    debug();

    render(<PostCard {... props}/>)

    expect(screen.getByRole('img', {name: props.title})).toHaveAttribute('src', props.cover);
    
    expect(screen.getByRole('heading', {name: props.title})).toBeInTheDocument();// verifica se existe img no componente!, se não tiver vai falhar o test
    expect(screen.getByText(props.body)).toBeInTheDocument()
    })

    it("should match snapshot",()=>{
       const {container} =  render(<PostCard {...props}/>); // o primeiro filho desse container é o elemento em que estoun renderizando

       expect(container.firstChild).toMatchSnapshot();
        
    })
});