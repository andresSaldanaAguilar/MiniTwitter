import React from 'react';
import Feed from '../../components/Feed';
import AppLayout from '../../components/AppLayout';

const Home = () => <AppLayout gridTemplateCol="30% 70%" rightSide={{ content: <Feed /> }} />;

export default Home;
