import React from 'react';
const Filter = (props) => {
    return (
        <React.Fragment>
            <header>
                <input
                    type="text"
                    name="filter"
                    id="filter"
                    placeholder="Filter your podcast"
                    value={props.query}
                    onChange={props.onChange}
                />
            </header>
            <style jsx>{`
                header {
                    color: #fff;
                    background: #263669;
                    padding: 15px;
                    text-align: center;
                    position: fixed;
                    width: 100%;
                    z-index: 100;
                    box-shadow: 0px 8px 6px rgba(0,0,0,0.25);
                }
            
                header input {
                    width: 50%;
                    height: 32px;
                    border: 1px solid #263669;
                    border-radius: 4px;

                }
            `}</style>
        </React.Fragment>
    )

}
export default Filter;