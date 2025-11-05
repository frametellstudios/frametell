// Custom CMS widget for browsing R2 videos
// This widget fetches videos from R2 via tRPC and allows selection

const R2VideoControl = window.createClass({
  getInitialState() {
    return {
      videos: [],
      loading: true,
      selectedUrl: this.props.value || '',
    };
  },

  async componentDidMount() {
    try {
      // Fetch videos from tRPC endpoint
      const response = await fetch('/api/trpc/content.r2Videos');
      const data = await response.json();
      
      // tRPC wraps response in { result: { data: ... } }
      const videos = data.result?.data || [];
      
      this.setState({ videos, loading: false });
    } catch (error) {
      console.error('Failed to load R2 videos:', error);
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

  render() {
    const { videos, loading, selectedUrl } = this.state;

    if (loading) {
      return window.h('div', { className: 'r2-video-widget' },
        window.h('p', {}, 'Loading videos from R2...')
      );
    }

    return window.h('div', { className: 'r2-video-widget', style: { marginTop: '10px' } },
      // Manual URL input
      window.h('div', { style: { marginBottom: '15px' } },
        window.h('label', { style: { display: 'block', marginBottom: '5px', fontWeight: 'bold' } }, 'Video URL'),
        window.h('input', {
          type: 'text',
          value: selectedUrl,
          onChange: this.handleManualInput,
          placeholder: 'Enter video URL or select from R2 below',
          style: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }
        })
      ),

      // R2 video browser
      videos.length > 0 && window.h('div', {},
        window.h('label', { style: { display: 'block', marginBottom: '10px', fontWeight: 'bold' } }, 'Or select from R2:'),
        window.h('div', {
          style: {
            maxHeight: '300px',
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '10px',
          }
        },
          videos.map((video) =>
            window.h('div', {
              key: video.key,
              onClick: () => this.handleSelect(video.url),
              style: {
                padding: '10px',
                marginBottom: '8px',
                border: selectedUrl === video.url ? '2px solid #1976d2' : '1px solid #e0e0e0',
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor: selectedUrl === video.url ? '#e3f2fd' : '#fff',
              }
            },
              window.h('div', { style: { fontWeight: 'bold', marginBottom: '4px' } }, video.key),
              window.h('div', { style: { fontSize: '12px', color: '#666' } },
                `${(video.size / 1024 / 1024).toFixed(2)} MB • ${new Date(video.lastModified).toLocaleDateString()}`
              )
            )
          )
        )
      ),

      videos.length === 0 && window.h('p', { style: { color: '#666', fontStyle: 'italic' } },
        'No videos found in R2. Upload videos to your frametell-assets bucket or enter a URL manually above.'
      )
    );
  }
});

const R2VideoPreview = window.createClass({
  render() {
    const { value } = this.props;
    
    if (!value) {
      return window.h('div', {}, 'No video selected');
    }

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
});

// Register the widget
window.CMS.registerWidget('r2-video', R2VideoControl, R2VideoPreview);
