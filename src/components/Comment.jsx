import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/henriquevazquez.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <stong>Henrique Vazquez</stong>
              <time title='05 de abril às 20:36h' dateTime='05-04-2023 20:35:55'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />                                   
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}