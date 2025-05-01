import Avatar from '@components/avatar';

import Paragraph from '@components/paragraph';

import Title from '@components/title';

export default function Home() {
  return (
    <>
      <section>
        <Avatar source="https://avatars.githubusercontent.com/u/86676526?v=4" description="Samuel do Prado Rodrigues" />
      </section>

      <section>
        <Title>RODRIGUES, Samuel do Prado</Title>
        <Paragraph>Pesquisa e Desenvolvimento</Paragraph>
      </section>

      <section>
        <Title>Sobre</Title>
        <Paragraph>
         Aluno de Engenharia de Computação no Instituto Federal de São Paulo (IFSP) e técnico em Informática para Internet pelo Centro Estadual de Educação Tecnológica Paula Souza (ETEC).
        </Paragraph>

        <Paragraph>
          Há dois anos atuo como pesquisador no Laboratório de Computação Aplicada (LABCOM3), com bolsa PIBITI concedida pelo CNPq, desenvolvendo estudos na área de redes ópticas elásticas (EONs). Na primeira pesquisa, explorei o uso de algoritmos de aprendizado de máquina como agentes em EONs. Atualmente, me concentro no estudo e desenvolvimento de algoritmos proativos e reativos de desfragmentação de espectro, além da análise de métricas de qualidade de serviço.
        </Paragraph>

        <Paragraph>
         Também colaboro com o Laboratório Oficinas 4.0, oferecendo suporte técnico e desenvolvendo soluções para projetos industriais baseados em sensores IoT, sistemas embarcados e protocolos de comunicação como Bluetooth e MQTT. No laboratório, participo de estudos e implementações voltados ao processamento digital de sinais e aprendizado de máquina, focados na detecção e análise de falhas em rolamentos por meio de vibrações e lubrificação, com o objetivo de aprimorar a manutenção preditiva e aumentar a confiabilidade dos sistemas industriais.
        </Paragraph>

        <Paragraph>
         Dentre minhas atividades extracurriculares participo ativamente no Grupo de Estudos de Robótica e Sistemas Embarcados (GERSE), onde estudo robótica móvel e visão computacional com ênfase em algoritmos de localização e mapeamento simultâneos. Além disso, exerço o cargo de diretor financeiro na Associação Atlética Acadêmica do IFSP Guarulhos.
         Possuo conhecimento em linguagens de programação como C, C++ e Java. Entusiasta no estudo de computação gráfica e sistemas embarcados.
        </Paragraph>
      </section>
    </>
  );
}
