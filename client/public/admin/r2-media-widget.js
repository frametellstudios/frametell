// Universal R2 Media Browser Widget with Filters
// Supports videos, images, icons, documents with type filtering

const R2MediaControl = window.createClass({
  getInitialState() {
    return {
      allMedia: [],
      filteredMedia: [],
      loading: true,
      selectedUrl: this.props.value || '',
      activeFilter: 'all', // all, video, image, icon, document
    };
  },

  async componentDidMount() {
    try {
      // Fetch all media from tRPC endpoint
      const response = await fetch('/api/trpc/content.r2Media');
      const data = await response.json();
      
      // tRPC wraps response in { result: { data: ... } }
      const allMedia = data.result?.data || [];
      
      this.setState({ 
        allMedia, 
        filteredMedia: allMedia,
        loading: false 
      });
    } catch (error) {
      console.error('Failed to load R2 media:', error);
      this.setState({ loading: false });
    }
  },

  handleSelect(url) {
    this.setState({ selectedUrl: url });
    this.props.onChange(url);
  },

  handleManualInput(e) {
    const url = e.target.value;
    this.setState({ selectedUrl: url });
    this.props.onChange(url);
  },

  handleFilterChange(filter) {
    const { allMedia } = this.state;
    const filteredMedia = filter === 'all' 
      ? allMedia 
      : allMedia.filter(m => m.type === filter);
    
    this.setState({ activeFilter: filter, filteredMedia });
  },

  getFileIcon(type) {
    const icons = {
      video: '🎥',
      image: '🖼️',
      icon: '✨',
      document: '📄',
      other: '📎'
    };
    return icons[type] || icons.other;
  },

  getTypeCounts() {
    const { allMedia } = this.state;
    return {
      all: allMedia.length,
      video: allMedia.filter(m => m.type === 'video').length,
      image: allMedia.filter(m => m.type === 'image').length,
      icon: allMedia.filter(m => m.type === 'icon').length,
      document: allMedia.filter(m => m.type === 'document').length,
    };
  },

  render() {
    const { filteredMedia, loading, selectedUrl, activeFilter } = this.state;
    const counts = this.getTypeCounts();

    if (loading) {
      return window.h('div', { className: 'r2-media-widget' },
        window.h('p', {}, 'Loading media from R2...')
      );
    }

    const filterButtons = [
      { key: 'all', label: `All (${counts.all})` },
      { key: 'video', label: `Videos (${counts.video})` },
      { key: 'image', label: `Images (${counts.image})` },
      { key: 'icon', label: `Icons (${counts.icon})` },
      { key: 'document', label: `Docs (${counts.document})` },
    ];

    return window.h('div', { className: 'r2-media-widget', style: { marginTop: '10px' } },
      // Manual URL input
      window.h('div', { style: { marginBottom: '15px' } },
        window.h('label', { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, 'Media URL'),
        window.h('input', {
          type: 'text',
          value: selectedUrl,
          onChange: this.handleManualInput,
          placeholder: 'Enter URL or select from R2 below',
          style: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }
        })
      ),

      // Filter buttons
      counts.all > 0 && window.h('div', { style: { marginBottom: '15px' } },
        window.h('label', { style: { display: 'block', marginBottom: '8px', fontWeight: 'bold' } }, 'Browse R2 Media:'),
        window.h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          filterButtons.map(({ key, label }) =>
            window.h('button', {
              key,
              type: 'button',
              onClick: () => this.handleFilterChange(key),
              style: {
                padding: '6px 12px',
                border: activeFilter === key ? '2px solid #1976d2' : '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: activeFilter === key ? '#e3f2fd' : '#fff',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeFilter === key ? 'bold' : 'normal',
              }
            }, label)
          )
        )
      ),

      // Media browser
      filteredMedia.length > 0 && window.h('div', {
        style: {
          maxHeight: '400px',
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '10px',
        }
      },
        filteredMedia.map((media) => {
          const isSelected = selectedUrl === media.url;
          const isImage = media.type === 'image' || media.type === 'icon';
          
          return window.h('div', {
            key: media.key,
            onClick: () => this.handleSelect(media.url),
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px',
              marginBottom: '8px',
              border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: isSelected ? '#e3f2fd' : '#fff',
            }
          },
            // Thumbnail or icon
            window.h('div', {
              style: {
                width: '60px',
                height: '60px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                overflow: 'hidden',
              }
            },
              isImage 
                ? window.h('img', {
                    src: media.url,
                    alt: media.key,
                    style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }
                  })
                : window.h('div', {
                    style: { fontSize: '32px' }
                  }, this.getFileIcon(media.type))
            ),
            
            // File info
            window.h('div', { style: { flex: 1, minWidth: 0 } },
              window.h('div', { 
                style: { 
                  fontWeight: 'bold', 
                  marginBottom: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                } 
              }, media.key),
              window.h('div', { style: { fontSize: '12px', color: '#666' } },
                `${media.extension.toUpperCase()} • ${(media.size / 1024 / 1024).toFixed(2)} MB • ${new Date(media.lastModified).toLocaleDateString()}`
              )
            )
          );
        })
      ),

      filteredMedia.length === 0 && counts.all > 0 && window.h('p', { 
        style: { color: '#666', fontStyle: 'italic', marginTop: '10px' } 
      },
        `No ${activeFilter === 'all' ? '' : activeFilter + ' '}files found.`
      ),

      counts.all === 0 && window.h('p', { style: { color: '#666', fontStyle: 'italic' } },
        'No media found in R2. Upload files to your frametell-assets bucket or enter a URL manually above.'
      )
    );
  }
});

const R2MediaPreview = window.createClass({
  render() {
    const { value } = this.props;
    
    if (!value) {
      return window.h('div', {}, 'No media selected');
    }

    // Detect media type from URL
    const ext = value.split('.').pop()?.toLowerCase() || '';
    const isVideo = ['mp4', 'webm', 'mov', 'avi', 'mkv', 'm4v'].includes(ext);
    const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext);

    if (isVideo) {
      return window.h('div', {},
        window.h('video', {
          src: value,
          controls: true,
          style: {
            maxWidth: '100%',
            maxHeight: '300px',
            borderRadius: '4px',
          }
        })
      );
    }

    if (isImage) {
      return window.h('div', {},
        window.h('img', {
          src: value,
          alt: 'Preview',
          style: {
            maxWidth: '100%',
            maxHeight: '300px',
            borderRadius: '4px',
          }
        })
      );
    }

    return window.h('div', {},
      window.h('a', {
        href: value,
        target: '_blank',
        style: { color: '#1976d2' }
      }, value)
    );
  }
});

// Register the widget
window.CMS.registerWidget('r2-media', R2MediaControl, R2MediaPreview);
