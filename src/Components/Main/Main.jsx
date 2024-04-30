import styles from './Main.module.scss'
import { Chart } from "react-google-charts"
import { FaRegEye, FaRegCircle, FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa"
import userPhoto from '../../Img/user.png'

const Main = () => {
  const data = [
    [
      "Dia",
      "Despesas",
      "Faturamento",
      "Lucro",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ];

  const options = {
    chart: {
      title: "Ganhos de bilheteria nas duas primeiras semanas de abertura",
      subtitle: "em milhões de dólares (USD)",
    },
  };


  const data2 = [
    ["Mês", "Despesas", "Faturamento", "Lucro"],
    ["Jan", 1000, 400, 500],
    ["Fer", 1170, 460, 750],
    ["Mar", 660, 1120, 300],
    ["Abr", 1030, 540, 650],
  ];

  const options2 = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };
  return (
    <main className={styles.containerMain}>
      <section>
        <div className={styles.grafic}>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
        <div className={styles.details}>
          <div>
            <h2>Maior faturamento</h2>
            <span className={styles.colorBlue}>152mi</span>
            <p>Jan 1 - Dez 31 (2023)</p>
            <button className={styles.blue}><FaRegEye size={25} /></button>
          </div>
          <div>
            <h2>Objetivo</h2>
            <span className={styles.colorGreen}>51,627</span>
            <p>Jan 1 - Dez 31 (2023)</p>
            <button className={styles.green}><FaRegEye size={25} /></button>
          </div>
          <div>
            <h2>Impacto</h2>
            <span className={styles.colorYellow}>96%</span>
            <p>Jan 1 - Dez 31 (2023)</p>
            <button className={styles.yellow}><FaRegEye size={25} /></button>
          </div>
        </div>
      </section>
      <section className={styles.secondSection}>
        <div>
          <h3>Projetos Publicados</h3>
          <p>613 <span className={styles.colorBlue}>+1,53%</span></p>
        </div>
        <div>
          <h3>Tarefas Concluídas</h3>
          <p><span className={styles.colorRed}>8.215 -0,33%</span></p>
        </div>
        <div>
          <h3>Tarefas bem-sucedidas</h3>
          <p>76,3% <span className={styles.colorGreen}>+1,53%</span></p>
        </div>
        <div>
          <h3>Projetos em Andamento</h3>
          <p>435 <span className={styles.colorGreen}>+4,6%</span></p>
        </div>
      </section>
      <section className={styles.thirdSection}>
        <Chart
          chartType="Bar"
          width="500px"
          height="400px"
          data={data2}
          options={options2}
        />
        <div className={styles.newsContainer}>
          <h2>Quais as novas?</h2>
          <div className={styles.news}>
            <img src={userPhoto} alt="Usuário" />
            <div>
              <p>Seu gerente postou.</p>
              <span>Bruloiudo</span>
            </div>
          </div>
          <div className={styles.news}>
            <img src={userPhoto} alt="Usuário" />
            <div>
              <p>Você tem 3 tarefas pendentes.</p>
              <span>Grupadiudo</span>
            </div>
          </div>
          <div className={styles.news}>
            <img src={userPhoto} alt="Usuário" />
            <div>
              <p>Novo pedido recebido.</p>
              <span>Grupadiudo</span>
            </div>
          </div>
          <div className={styles.news}>
            <img src={userPhoto} alt="Usuário" />
            <div>
              <p>Grupadiudo postou.</p>
              <span>Grupadiudo</span>
            </div>
          </div>
          <div className={styles.news}>
            <img src={userPhoto} alt="Usuário" />
            <div>
              <p>Grupadiudo postou.</p>
              <span>Grupadiudo</span>
            </div>
          </div>
          <div className={styles.news}>
            <img src={userPhoto} alt="Usuário" />
            <div>
              <p>Grupadiudo postou.</p>
              <span>Grupadiudo</span>
            </div>
          </div>
          <div className={styles.news}>
            <img src={userPhoto} alt="Usuário" />
            <div>
              <p>Grupadiudo postou.</p>
              <span>Grupadiudo</span>
            </div>
          </div>
        </div>
        <div className={styles.newsContainer}>
          <h2>Atividades mais recentes.</h2>
          <div className={styles.news}>
            <FaRegCircle color='red' />
            <div>
              <p>*****************</p>
              <span>&&&&&&&&&&&&&&&&</span>
            </div>
          </div>
          <div className={styles.news}>
            <FaRegCircle color='green' />
            <div>
              <p>*****************</p>
              <span>&&&&&&&&&&&&&&&&</span>
            </div>
          </div>
          <div className={styles.news}>
            <FaRegCircle color='red' />
            <div>
              <p>*****************</p>
              <span>&&&&&&&&&&&&&&&&</span>
            </div>
          </div>
          <div className={styles.news}>
            <FaRegCircle color='yellow' />
            <div>
              <p>*****************</p>
              <span>&&&&&&&&&&&&&&&&</span>
            </div>
          </div>
          <div className={styles.news}>
            <FaRegCircle color='blue' />
            <div>
              <p>*****************</p>
              <span>&&&&&&&&&&&&&&&&</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fourthSection}>
        <h2>Novos Produtos</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Código do Produto</th>
              <th>Cliente</th>
              <th>Estoque</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sofá</td>
              <td>#724h252</td>
              <td>dfsdf@hotmail.com</td>
              <td className={styles.empty}>Esgotado</td>
              <td className={styles.stars}>
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStarHalfAlt color='yellow' />
              </td>
            </tr>
            <tr>
              <td>Computador</td>
              <td>#724h252</td>
              <td>dfsdf@hotmail.com</td>
              <td className={styles.warning}>10</td>
              <td className={styles.stars}>
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaStar color='yellow' />
              </td>
            </tr>
            <tr>
              <td>Relorio</td>
              <td>#724h252</td>
              <td>dfsdf@hotmail.com</td>
              <td className={styles.full}>50</td>
              <td className={styles.stars}>
                <FaStar color='yellow' />
                <FaStar color='yellow' />
                <FaRegStar color='yellow' />
                <FaRegStar color='yellow' />
                <FaRegStar color='yellow' />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default Main
