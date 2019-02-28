import React from 'react';

const TodoFooter = () => {
    return(
        <footer>
        <span><span className="remaining">4</span> items left</span>
        <button className="submit"> Clear Completed </button>
       </footer>
    );
}

export default TodoFooter;