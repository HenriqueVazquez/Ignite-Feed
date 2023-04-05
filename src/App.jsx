import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Henrique Vazquez"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sunt, nam veritatis velit architecto voluptatem et amet dolores, alias repellat molestias sed itaque nesciunt optio possimus. Unde minus enim eligendi?"
          />

          <Post
            author="Karen Vazquez"
            content="Amo a Sophia"
          />
        </main>
      </div>
    </div>
  )
}


