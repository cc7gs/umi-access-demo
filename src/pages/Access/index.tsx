import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button } from 'antd';

const AccessPage: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <pre>{JSON.stringify(initialState)}</pre>
      <Button
        onClick={() => {
          setInitialState({
            ...initialState!,
            canSeeHome: !initialState?.canSeeHome,
          });
        }}
      >
        改变Home页面权限
      </Button>
    </PageContainer>
  );
};

export default AccessPage;
