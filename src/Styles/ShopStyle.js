import { makeStyles } from '@mui/styles';
import { fontSize } from '@mui/system';
const useStyles = makeStyles(theme => ({
  ProductCard: {
    minHeight: '380px',
    padding: 10,
    border: '1px solid #eee',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& $img': {
      width: '100%',
      cursor: 'pointer',
      transition: 'transform 1s',
      '&:$hover': {
        transform: 'scale(1.1)'
      }
    },
  },
  ProductInfo: {
    zIndex: '2',
    padding: 5,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    '& $Button': {
      borderRadius: '20px',
      width: '100%',
      gridRow: '1/3',
      gridColumn: '2',
      maxHeight: '50px',
      alignSelf: 'center'
    },
  },
  shopHeader: {
    overflow: 'hidden',
    width: '100%',
    backgroundColor: 'rgb(238,238,238)',
    // background: 'radial-gradient(circle, rgba(248,248,248,1) 0%, rgba(240,240,240,1) 100%)',
    height: '700px',
    display: 'flex !important',
    marginBottom: 20,
    boxShadow: '1px 0 20px 2px #eee'
  },
  headerContainer: {

    display: 'grid',
    gridTemplateColumns: '45% 10% 45%',
    gridTemplateRows: 'auto 50px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  '@keyframes fadeIn': {
    'from': { opacity: 0 },
    'to': { opacity: 0 },
  },
  fade: { animation: '$fadeIn 1s' },

  headerImg: {
    marginTop: 50,
    maxHeight: '600px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',

    '& $img': {
      mixBlendMode: 'multiply',
      width: '60%',
      objectFit: 'cover',
      zIndex: '5',
      cursor: 'pointer',
      transition: 'transform 1s',

      '&:$hover': {
        transform: 'scale(1.1)'
      }
    },
  },

  headerCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  verticalLine: {
    borderLeft: '2px solid #ccc',
    height: '250px',
    width: 1,
    zIndex: 2,
    position: 'relative'
  },

  headerRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '50px',
  },
  headerText: {
    position: 'relative',
    zIndex: 999,
    textAlign: 'left'
  },

  shape: {
    // borderRadius: '50%',
    // top: 0,
    // left: '25%',
    // transform: 'translate(-50%, 0%) rotate(-45deg)',
    background: 'rgb(170, 170, 170)',
    borderRadius: '20px',
    // background: 'linear-gradient(90deg, rgba(170, 170, 170, 1) 50%, rgba(170, 170, 170, 0) 100%)',
    height: '2px',
    // paddingTop:10,
    marginRight: 10,
    width: '20%',
    display: 'inline-block',
    // backgroundColor: '#eee',
    // borderBottom: '2px solid #aaa',
    // background: 'rgb(186, 22, 22)',
    // background: 'linear-gradient(90deg, rgba(186, 22, 22, 1) 0%, rgba(233, 85, 85, 1) 51%, rgba(201, 33, 33, 1) 100%)',
    // position: 'absolute',
    zIndex: 999,
  },
  btnContainer: {
    paddingBottom: 30,
    alignSelf: 'flex-end',
    gridColumn: '1/4', width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    padding: 10
  },
  carouselBtn: {
    cursor: 'pointer',
    width: 15,
    height: 15,
    backgroundColor: '#aaa',
    display: 'block',
    borderRadius: '50%',
    margin: '0 10px',
    '&:hover': {
      filter: 'brightness(50%)',
      backgroundColor: 'white'
    },
  },

  filterContainer: {
    display: 'grid',
    gridTemplateColumns: '4fr 2.5fr',
    // border:'1px solid #ccc',
    marginBottom:50
  },
  selects: {
    display:'flex',
    justifyContent:'space-between'

  },
  sorts: {
    display:'flex',
    justifyContent:'flex-end',
    '& $i': {
      color: '#555',
      fontSize: 35,
      padding:10,
      cursor:'pointer',
      '&:hover': {
        color: '#000'
      },
    },

  },
}));

export default useStyles