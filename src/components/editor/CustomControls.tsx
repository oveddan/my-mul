import { useState } from 'react';
import { ClearModal, HelpModal } from '@oveddan-behave-graph/flow';
import {
  faDownload,
  faPlay,
  faPause,
  faQuestion,
  faTrash,
  faUpload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Controls, ControlButton } from 'reactflow';
import { GraphJSON } from '@oveddan-behave-graph/core';
import { LoadModal } from './LoadModal';
import { SaveModal } from './SaveModal';

export const CustomControls = ({
  toggleRun,
  graphJson,
  running,
  additionalControls = null,
  setBehaviorGraph,
  setModelFile
}: {
  toggleRun: () => void;
  running: boolean;
  additionalControls?: JSX.Element | null;
  graphJson: GraphJSON | undefined;
  setBehaviorGraph: (value: GraphJSON) => void;
  setModelFile: (file: File) => void;
}) => {
  const [loadModalOpen, setLoadModalOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [clearModalOpen, setClearModalOpen] = useState(false);

  return (
    <>
      <Controls className="bg-white">
        <ControlButton
          title="Help"
          onClick={() => setHelpModalOpen(true)}
          className="align-middle"
        >
          <FontAwesomeIcon icon={faQuestion} />
        </ControlButton>
        <ControlButton title="Load" onClick={() => setLoadModalOpen(true)}>
          <FontAwesomeIcon icon={faUpload} />
        </ControlButton>
        <ControlButton title="Save" onClick={() => setSaveModalOpen(true)}>
          <FontAwesomeIcon icon={faDownload} />
        </ControlButton>
        <ControlButton title="Clear" onClick={() => setClearModalOpen(true)}>
          <FontAwesomeIcon icon={faTrash} />
        </ControlButton>
        <ControlButton title="Run" onClick={() => toggleRun()}>
          <FontAwesomeIcon icon={running ? faPause : faPlay} />
        </ControlButton>
        {additionalControls}
      </Controls>
      <>
        <SaveModal
          open={saveModalOpen}
          onClose={() => setSaveModalOpen(false)}
          graphJson={graphJson}
        />
        <LoadModal
          open={loadModalOpen}
          onClose={() => setLoadModalOpen(false)}
          setBehaviorGraph={setBehaviorGraph}
          setModelFile={setModelFile}
        />
        <HelpModal
          open={helpModalOpen}
          onClose={() => setHelpModalOpen(false)}
        />
        <ClearModal
          open={clearModalOpen}
          onClose={() => setClearModalOpen(false)}
        />
      </>
    </>
  );
};