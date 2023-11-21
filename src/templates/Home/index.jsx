import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import {loadPost} from "../../utils/load-posts"
import Button from '../../components/Button'; 
import TextInput from '../../components/TextInput';


export class Home extends Component{
  // constructor(props){ // o construto recebe props
    // super(props); // para poder chamar o construtor da classe Component tb

    // this.handlePClick = this.handlePClick.bind(this); // tem que fazer o bind para o this se usado dentro do metodo .. agora eu tenho o this.state dentro do metodo handlePClick
    state = {
      posts:[],
      allPosts:[],
      page: 0,
      postsPerPage:10,
      searchValue: ""

      // name: "Matheus Nascimento",
      // age: 23,
      // counter: 0
    };
  // }

  // timeoutUpdate = null;
  
   async componentDidMount(){
    await this.loadPosts();
    // this.handleTimeout();
  }

  loadPosts = async ()=>{
    const postsAndPhotos = await loadPost();
    const {page, postsPerPage} = this.state;
    this.setState({
      posts : postsAndPhotos.slice(page,postsPerPage), // 0 = inicio 1 =fim // lembrando que o segundo indece não é incluido
      allPosts: postsAndPhotos,
    });

  }

  loadMorePosts = () =>{ // não precisa ser async porque ñ vamos buscar de nenhuma API.
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage =   page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage,nextPage+postsPerPage)

    posts.push(... nextPosts)

    this.setState({posts, page:nextPage})

    // console.log(page, postsPerPage, nextPage, nextPage + postsPerPage)
  }

  handleChange = (e) =>{
    const {value} = e.target;
    this.setState({searchValue: value})
  }

  // componentDidUpdate(){
  //   // clearTimeout(this.timeoutUpdate);
  //   // this.handleTimeout();
  // }

  // componentWillUnmount(){
  //   // clearTimeout(this.timeoutUpdate);
  // }

  // handleTimeout = ()=>{
  //   const {posts, counter} = this.state;
  //   posts[0].title = "O titulo mudou!"
  //   this.timeoutUpdate = setTimeout(()=>{
  //     this.setState({posts, counter: counter + 1});
  //   },5000);
  // }

  // handlePClick(){
  //   const {name} = this.state;
  //   console.log(`<p> clicado ${name}`)
  // }

  // handlePClick(){
  //   this.setState({name:"Júnior"});
  // }

  // handleAClick = (e) =>{ // quando eu crio o meu metodo com arrowfunction por ela não ter um this ela busca no elemento pai, que é a classe, desta forma não precisamos mais fazer o bind de this.state
  //   e.preventDefault()
  //   const {counter} = this.state;
  //   this.setState({counter: counter + 1});
  // }
  
  render() {
    const {posts, page, postsPerPage, allPosts,searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    //usando operação ternaria para fazer a logica do filtro
    const filteredPosts = !!searchValue ? 
      allPosts.filter(post =>{
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
          );
      })
    : posts ;
    // ao inves de usar assim:
    // const name = this.state.name;
    // const age = this.state.age;

    //podemos usar destructruing
    // const {name, counter} = this.state; //usando destructuring não precisamos repetir o name apos o state
    // const {age} = this.state;

    return(
      <section className='container'>

        {/*2 sinais de !! em js converte o resultado para bolean*/}
        <div className='search-container'>

            {!!searchValue && (
              <h2>Search value: {searchValue} </h2>
              )}

            <TextInput handleChange={this.handleChange} searchValue={searchValue}/>
        </div>
          {filteredPosts.length > 0 &&(
            <Posts posts={filteredPosts}/>
          )}

          {filteredPosts.length === 0 &&(
            <h3>Nenhum post possui o valor : {searchValue}</h3>
          )}

        {!searchValue && (
          <Button 
          onClick={this.loadMorePosts} 
          text="Load more posts"
          disabled={noMorePosts}/>
        )}
        
      </section>
    )
  }

}

