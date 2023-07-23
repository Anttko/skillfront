import { Progress } from '@chakra-ui/react';
import { useBoundStore } from '../stores';
import { useEffect, useState } from 'react';
import { TOTAL_PROGRESS } from '../utils/values';

const ProgressBar = () => {
  const { selectedSfia, selectedSoftSkills, countValuable, countFuture, countImportant, countMoreValuable } =
    useBoundStore((state) => ({
      selectedSfia: state.selectedSfia,
      selectedSoftSkills: state.selectedSoftSkills,
      countValuable: state.countValuable,
      countMoreValuable: state.countMoreValuable,
      countImportant: state.countImportant,
      countFuture: state.countFuture,
    }));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(
      selectedSfia.length +
        selectedSoftSkills.length +
        countValuable +
        countMoreValuable +
        countImportant +
        countFuture,
    );
  }, [selectedSfia, selectedSoftSkills, countValuable, countMoreValuable, countImportant, countFuture]);

  return <Progress value={progress} max={TOTAL_PROGRESS} />;
};
export default ProgressBar;
