import React from 'react';
import { navigate } from 'gatsby';

// Components
import PlantCircle from '../../components/PlantGrowthModal/Plant';
import Plant from '../../components/PlantGrowthModal/GrownPlant';
import Zombie from '../../components/GameComponents/Zombie';

import {
  Modal,
  ModalMask,
  ModalWrapper,
  ModalBottom,
  Heading,
  SubHeading,
  SuccessLights,
  Button,
} from '../../PagesStyle/GamePage/styled';

const GameOverModal = ({ totalDeadZombies = 4, status = 'lost' }) => {
  return (
    <>
      {totalDeadZombies === 4 ? (
        <div>
          <ModalWrapper>
            <ModalMask />
            <Modal>
              <SuccessLights />
              <PlantCircle />
              {status === 'won' ? (
                <Plant positionTop="40%" positionLeft="50%" />
              ) : (
                <Zombie positionBottom="50%" positionRight="calc(50% - 5vw)" />
              )}
              <ModalBottom>
                {status === 'won' ? (
                  <>
                    <Heading>Victory</Heading>
                    <SubHeading>
                      Your plant has defeated the first wave of the zombie
                      apocalypse. <br /> But are you ready to take it to the
                      next level?
                    </SubHeading>
                  </>
                ) : (
                  <>
                    <Heading>Battle Lost</Heading>
                    <SubHeading>
                      Your plant was defeated in the first wave of the zombie
                      apocalypse. <br /> Are you ready to try again?
                    </SubHeading>
                  </>
                )}
                <Button
                  onClick={() => {
                    if (status === 'won') {
                      navigate('/tezos/up-next');
                    } else {
                      typeof window !== 'undefined' && window.location.reload();
                    }
                  }}
                >
                  {status === 'won' ? 'Continue' : 'Retry'}
                </Button>
              </ModalBottom>
            </Modal>
          </ModalWrapper>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default GameOverModal;
