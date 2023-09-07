import { GrayButtonFontSize10px } from './styles';

export const ButtonGrayFontSize10px = ({ onClick, text }) => {
  return (
    <GrayButtonFontSize10px onClick={onClick}>{text}</GrayButtonFontSize10px>
  );
};
