import React from 'react';



export default function Folders(props) {
    const { folders } = props;
    
        return folders.map((f) => <Folders key={f.id} f={folders} />);
    }

