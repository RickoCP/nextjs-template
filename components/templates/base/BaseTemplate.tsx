
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  // return <div className={styles.container}>{sampleTextProp}</div>;
  return <div className="bg-gradient-to-r from-red-500 to-blue-500">{sampleTextProp}</div>;
  
};

export default BaseTemplate;
