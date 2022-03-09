import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding-left: 30px;
  padding-right: 30px;
  width: width ?? 100%;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  color: black;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
`;

export { ButtonWrapper };

// const useStyles = ({ width, disabled }) =>
//   createUseStyles({
//     button: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 48,
//       paddingLeft: 30,
//       paddingRight: 30,
//       width: width ?? '100%',
//       fontSize: 16,
//       fontWeight: '500',
//       borderRadius: 4,
//       backgroundColor: !disabled ? 'white' : 'rgba(255, 255, 255, 0.5)',
//       color: 'black',
//       cursor: 'pointer',
//       '&:active': {
//         opacity: 0.8,
//       },
//     },
//   });

// export default useStyles;
