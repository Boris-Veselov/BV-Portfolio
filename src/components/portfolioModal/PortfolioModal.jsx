import './portfolioModal.scss';

export default function PortfolioModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className='modalOverlay' onClick={onClose}>
      <div className='modalContent' onClick={e => e.stopPropagation()}>
        <button className='closeBtn' onClick={onClose}>×</button>
        <div className='modalBody'>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          {item.tags && (
            <div className='tags'>
              {item.tags.map(tag => (
                <span key={tag} className='tag'>{tag}</span>
              ))}
            </div>
          )}
          <div className='modalLinks'>
            {item.github && (
              <a href={item.github} target='_blank' rel='noreferrer' className='btn-github'>
                GitHub
              </a>
            )}
            {item.live && (
              <a href={item.live} target='_blank' rel='noreferrer' className='btn-live'>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
