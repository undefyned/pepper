import React from 'react';
import Switch from '@material-ui/core/Switch';

const PreviewQuality = () => {
    const [previewQuality, setPreviewQuality] = React.useState(localStorage.getItem('previewQuality') === "true")

  React.useEffect(() => {
    localStorage.setItem('previewQuality', previewQuality)
  }, [previewQuality]);

  return (
        <Switch type="checkbox"  onClick={() => {setPreviewQuality(!previewQuality)}} checked={previewQuality} color="primary" />
  );
};

export default PreviewQuality;