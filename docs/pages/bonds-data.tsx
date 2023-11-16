import * as React from 'react';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import BondsTabs from 'docs/src/components/bonds/bonds_tabs';


// 定义表格的列
const columns = [
  {
    title: '转债名称',
    dataIndex: 'bond_nm',
    key: 'bond_nm',
  },
  {
    title: '代码',
    dataIndex: 'bond_id',
    key: 'bond_id',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '溢价率',
    dataIndex: 'premium_rt',
    key: 'premium_rt',
  },
  {
    title: '下修计数日',
    dataIndex: 'adjust_count',
    key: 'adjust_count',
  },
  {
    title: '年化收益率',
    dataIndex: 'ytm_rt',
    key: 'ytm_rt',
  },
  {
    title: '剩余年限',
    dataIndex: 'year_left',
    key: 'year_left',
  },
];




export default function Test() {

  return (
    <BrandingCssVarsProvider>
        <Head
        title="转债数据表"
        description="可转债的基础数据"
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
  
      <BondsTabs />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
