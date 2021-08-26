import React from 'react';
import { AppMenu } from './component/menu';
import './App.less';
import imgAva from './imgs/avatar.png';
import { Layout, Avatar, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const MyAvatar = () => {
  return <img src={imgAva} />
}
const App = () => (
  <div className="App">
    <Layout>
      <Header>
        <Avatar size={64} icon={<MyAvatar />} />
        <div className='title'>
          jay-app-cli
        </div>
      </Header>
      <Layout>
        <Sider>
          <AppMenu />
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>
        <div>
          <div>版权所有&copy;</div>
          <div>jay-app-cli:Email:756774388@qq.com</div>
        </div>
      </Footer>
    </Layout>
  </div>
);

export default App;