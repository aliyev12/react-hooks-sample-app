import React, { useContext } from 'react';
import { ReducerContext } from '../contexts/ReducerContext';
import useInputState from '../hooks/useInputState';
import Edit from './Edit';
import '../styles/ContextExample.css';

const ReducerExample = () => {
  const { sizes, dispatch } = useContext(ReducerContext);
  const [sm, setSm] = useInputState(768);
  const [md, setMd] = useInputState(992);
  const [lg, setLg] = useInputState(1200);
  const [xl, setXl] = useInputState(1600);

  return (
    <div className="ContextExample">
      <fieldset>
        <form
          method="post"
          className="sizesForm"
          onSubmit={e => {
            e.preventDefault();
            dispatch({ type: 'UPDATE', payload: { sm, md, lg, xl } });
          }}
        >
          <label>
            <span>{sizes.sm.name}:</span>
            <input value={sm} onChange={setSm} type="number" />
            <Edit target="sm"/>
          </label>
          <label>
            <span>{sizes.md.name}:</span>
            <input value={md} onChange={setMd} type="number" />
            <Edit target="md"/>
          </label>
          <label>
            <span>{sizes.lg.name}:</span>
            <input value={lg} onChange={setLg} type="number" />
            <Edit target="lg"/>
          </label>
          <label>
            <span>{sizes.xl.name}:</span>
            <input value={xl} onChange={setXl} type="number" />
            <Edit target="xl"/>
          </label>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </fieldset>
      <div className="fromContext">
        <strong>Sizes from Reducer Store:</strong>
        <ul>
          {Object.keys(sizes).map(key => (
            <li key={key}>{sizes[key].name} → {sizes[key].size}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReducerExample;


// /* USING REDUX AND HOOKS */
// import React from 'react';
// import { connect } from 'react-redux';
// import useInputState from '../hooks/useInputState';
// import Edit from './Edit';
// import '../styles/ContextExample.css';

// const ReducerExample = ({ sizes, dispatch }) => {
//   const [sm, setSm] = useInputState(768);
//   const [md, setMd] = useInputState(992);
//   const [lg, setLg] = useInputState(1200);
//   const [xl, setXl] = useInputState(1600);

//   return (
//     <div className="ContextExample">
//       <fieldset>
//         <form
//           method="post"
//           className="sizesForm"
//           onSubmit={e => {
//             e.preventDefault();
//             dispatch({ type: 'UPDATE', payload: { sm, md, lg, xl } });
//           }}
//         >
//           <label>
//             <span>{sizes.sm.name}:</span>
//             <input value={sm} onChange={setSm} type="number" />
//             <Edit target="sm"/>
//           </label>
//           <label>
//             <span>{sizes.md.name}:</span>
//             <input value={md} onChange={setMd} type="number" />
//             <Edit target="md"/>
//           </label>
//           <label>
//             <span>{sizes.lg.name}:</span>
//             <input value={lg} onChange={setLg} type="number" />
//             <Edit target="lg"/>
//           </label>
//           <label>
//             <span>{sizes.xl.name}:</span>
//             <input value={xl} onChange={setXl} type="number" />
//             <Edit target="xl"/>
//           </label>
//           <button type="submit" className="submitBtn">Submit</button>
//         </form>
//       </fieldset>
//       <div className="fromContext">
//         <strong>Sizes from Reducer Store:</strong>
//         <ul>
//           {Object.keys(sizes).map(key => (
//             <li key={key}>{sizes[key].name} → {sizes[key].size}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch
//   };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ReducerExample)
