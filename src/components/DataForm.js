import React from 'react';

const DataForm = props => {
    const languagesObj = {
        starwars: ['yoda','sith','cheunh','gungan','mandalorian','huttese'],
        characters: ['pirate','minion','ferblatin','chef','dolan','fudd'],
        english: ['oldenglish','shakespeare','us2uk','uk2us']
    }
    const languagesArr = Object.keys(languagesObj);
    return (
        <form onSubmit={props.onSubmit}>       
            <label htmlFor='text'>Your text:</label>
            <textarea id='text'></textarea>
            <label htmlFor='languages'>Translate to:</label>
            <select id='languages'>
                {languagesArr.map(lang => (
                    <optgroup key={lang} label={lang}>
                        {languagesObj[lang].map( item => <option key={item} value={item}>{item}</option>)}
                    </optgroup>
                    )
                )}
            </select>
    <input type='submit' value='submit' />
</form>
    );
}

export default DataForm;
