import { Episodio } from 'src/app/interface/episodio.module';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodioServiceService{

  static emitirDetalhes = new EventEmitter<Episodio>();
  private episodioDetalheId!: number;
  private episodioDetalhe!: Episodio;
  private episodios: Episodio[] = [

    {
      id:1, img:'../../../assets/img/mini-img1.png',
      imgMed:'',
      imgLarg:'../../../assets/img/large-img1.png',
      titulo:'O ramo do Data Center no Brasil',
      descricao:'A transformação digital é um dos motores da economia da América Latina e do Brasil. Estudo do IDC Latin America publicado em 2020 indica que, até 2022, 40% do PIB da América Latina virá de negócios digitais.',
      apresentado: 'PapoCast',
      data: '16 Jan 21',
      duracao: '24:26',
      player: 'play_arrow'
    },

    {
      id:2,
      img:'../../../assets/img/mini-img2.png',
      imgMed:'',
      imgLarg:'../../../assets/img/large-img2.png',
      titulo:'Um bate papo sobre .NET',
      apresentado: 'PapoCast',
      descricao: 'Os conceitos introdutórios do .NET, um framework da Microsoft para o desenvolvimento e execução de aplicações, suas características e funcionamento, com visão prática de suas utilização.',
      data: '20 Fev 21',
      duracao: '35:40',
      player: 'play_arrow'
     },

    {
      id:3,
      img:'../../../assets/img/mini-img3.png',
      imgMed:'',
      imgLarg:'../../../assets/img/large-img3.png',
      titulo:'Python : Por onde começar?',
      descricao:'Uma introdução ao conhecimento e cotidiano dessa linguagem, com aprofundamento do básico ao avançado, trazendo a visão prática da utilização da linguagem de forma simples e dinâmica .',
      apresentado: 'PapoCast',
      data: '25 Fev 21',
      duracao: '4:27',
      player: 'play_arrow'
    },

    {
      id:4,
      img:'../../../assets/img/mini-img4.png',
      imgMed:'',
      imgLarg:'../../../assets/img/large-img4.png',
      titulo:'Vale apena aprender CSS?',
      descricao:'Há mil formas de te convencer que ainda vale muito a pena aprender CSS. Não é só porque hoje existem frameworks e bibliotecas que devemos ignorar o CSS. É preciso entender os conceitos dessa linguagem de estilo.',
      apresentado: 'PapoCast',
      data: '8 Mar 21',
      duracao: '1:27:11',
      player: 'play_arrow'
    },

    {
      id:5,
      img:'../../../assets/img/mini-img5.png',
      imgMed:'',
      imgLarg:'../../../assets/img/large-img5.png',
      titulo:'Entenda o que é HTML',
      descricao:'Antes de tudo o HTML é a sigla para Hyper Text Markup Language. Ele permite inserir o conteúdo e estabelecer a estrutura básica de um website. Entendendo ele, você será capaz de compreender as outras tecnologias.',
      apresentado: 'PapoCast',
      data: '25 Mar 21',
      duracao: '1:35:18',
      player: 'play_arrow'
    },

    {
      id:6,
      img:'../../../assets/img/mini-img6.png',
      imgMed:'',
      imgLarg:'../../../assets/img/large-img6.png',
      titulo:'Um bate papo sobre REST e RESTful',
      descricao:'Você sabe o que é REST e RESTful? Sabe aonde precisamos ultilizar ele e como? Tudo isso será explicado de forma clara e simples para que todos possam entender.',
      apresentado: 'PapoCast',
      data: '6 Abr 21',
      duracao: '1:20:18',
      player:'play_arrow'
    },

    {
      id:7,
      img:'',
      imgMed:'../../../assets/img/med-img7.png',
      imgLarg:'../../../assets/img/large-img7.png',
      titulo:'Ramo de Telecomunicação no Brasil',
      descricao:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      apresentado: 'PapoCast',
      data: '26 Set 21',
      duracao: '1:45:18',
      player:'play_arrow'
    },

    {
      id:8 ,
      img:'',
      imgMed:'../../../assets/img/med-img8.png',
      imgLarg:'../../../assets/img/large-img8.png',
      titulo:'Desafios no ramo da Programação',
      descricao:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      apresentado: 'PapoCast',
      data: '8 Ago 21',
      duracao: '35:40',
      player:'play_arrow'
    }

  ];

  constructor() { }


  getEpisodios(){
    return this.episodios;
  }

  setDetalhes(id: number){

    this.episodioDetalheId = id;

    for(let i in this.episodios){
      if(this.episodioDetalheId === this.episodios[i].id){
        this.episodioDetalhe = this.episodios[i];
      }
    }
    EpisodioServiceService.emitirDetalhes.emit(this.episodioDetalhe);
  }

  getEpisodioDetalhes(){

    return this.episodioDetalhe;

  }
}
