import Link from 'next/link';
import styles from '../styles/Home.module.css';
import MainLayout from '../components/MainLayout';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import T from '@material-ui/core/Typography';

const Home = () => (
  <MainLayout title="Home">
    <Grid container spacing={4}>
      <Grid item md={6} xs={12}>
        <Link href="/exchange">
          <Card className={styles.card}>
            <CardContent>
              <T variant="h4">Exchange&nbsp;&rarr;</T>
              <T variant="body1">Start exchanging super tokens now!</T>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card className={styles.card}>
          <CardContent>
            <T variant="h4">Dashboard&nbsp;&rarr;</T>
            <T variant="body1">See your current exchange streams.</T>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Link href="/save">
          <Card className={styles.card}>
            <CardContent>
              <T variant="h4">Save&nbsp;&rarr;</T>
              <T variant="body1">Get paid to provide liquidity for super token exchanges!</T>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card className={styles.card}>
          <CardContent>
            <T variant="h4">Create Exchange&nbsp;&rarr;</T>
            <T variant="body1">Create a new super token exchange.</T>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12}>
        <Card className={styles.card}>
          <CardContent>
            <T variant="h4">Documentation&nbsp;&rarr;</T>
            <T variant="body1">Learn about the inner workings of Streamswap.</T>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </MainLayout>
);

export default Home;
