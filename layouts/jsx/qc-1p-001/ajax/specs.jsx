React.createClass({
  render: function() {
    return (

      {/* Content should always be inside "article.tech-specs". */}
      <article className="tech-specs">
        <h2>Oculus Rift PC Specification</h2>
        <h4>Recommended Spec</h4>
        <div className="table-responsive space-bottom">
          <table className="table-striped">
            <tbody>
              <tr>
                <th scope="row">Video Card</th>
                <td>NVIDIA GTX 970 / AMD Radeon R9 290 equivalent or greater</td>
              </tr>
              <tr>
                <th scope="row">CPU</th>
                <td>Intel i5-4590 equivalent or greater</td>
              </tr>
              <tr>
                <th scope="row">Memory</th>
                <td>8GB+ RAM</td>
              </tr>
              <tr>
                <th scope="row">Video Output</th>
                <td>Compatible HDMI 1.3 video output</td>
              </tr>
              <tr>
                <th scope="row">USB Ports</th>
                <td>3x USB 3.0 ports plus 1x USB 2.0 port</td>
              </tr>
              <tr>
                <th scope="row">OS</th>
                <td>Windows 7 SP1 64 bit or newer</td>
              </tr>
            </tbody>
          </table>
        </div>{/* .table-responsive */}
        <h4>Minimum Spec</h4>
        <div className="table-responsive space-bottom">
          <table className="table-striped">
            <tbody>
              <tr>
                <th scope="row">Video Card</th>
                <td>NVIDIA GTX 960 / AMD Radeon RX 470 or greater</td>
              </tr>
              <tr>
                <th scope="row">CPU</th>
                <td>Intel i3-6100 / AMD FX4350 or greater</td>
              </tr>
              <tr>
                <th scope="row">Memory</th>
                <td>8GB+ RAM</td>
              </tr>
              <tr>
                <th scope="row">Video Output</th>
                <td>Compatible HDMI 1.3 video output</td>
              </tr>
              <tr>
                <th scope="row">USB Ports</th>
                <td>1x USB 3.0 port, plus 2x USB 2.0 ports</td>
              </tr>
              <tr>
                <th scope="row">OS</th>
                <td>Windows 8 or newer</td>
              </tr>
            </tbody>
          </table>
        </div>{/* .table-responsive */}
      </article>{/* .order-details */}
    );
  }
});