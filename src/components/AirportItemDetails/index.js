import { useContext, useState } from "react";
import { AirportsContext } from "../../aiportContext";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiUpload2Fill } from "react-icons/ri";
import Popup from "reactjs-popup";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.css";
import { Link, useParams } from "react-router-dom";

const AirportItemDetails = () => {
  const { id } = useParams();
  const [showImage, setShowImage] = useState(false);

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
  };

  const intId = parseInt(id);

  const { airports } = useContext(AirportsContext);

  const airport = airports.find((each) => each.id === intId);

  return (
    <div className="col-cont">
      <Header />
      <div className="row-cont">
        <Sidebar />
        <div className="aiport-details-container">
          <div className="navigator-container">
            <Link to="/airport" className="link-design-path">
              <p className="aiport-para">Airport</p>
            </Link>
            <MdKeyboardArrowRight size={20} color="#464646" />
            <p className="current-airport-name">{airport.name}</p>
          </div>
          <h1 className="heading-name">{airport.name}</h1>
          <div className="buttons-container">
            <button className="btn teminal-button">Terminals</button>
            <button className="btn">Transport</button>
            <button className="btn">Contact details</button>
          </div>
          <div className="termilas-conainer">
            <div className="terminal-image-cont">
              <img
                src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                alt="terminal"
                className="terminal-image"
              />
              <div className="terminal-details-cont">
                <div className="terminal-name-cont">
                  <p className="terminal-title">Terminal 1</p>
                  <p className="dots">...</p>
                </div>
                <p className="description">
                  Optional metadata <br /> should be two lines.
                </p>
              </div>
            </div>
            <div className="terminal-image-cont">
              <img
                src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                alt="terminal"
                className="terminal-image"
              />
              <div className="terminal-details-cont">
                <div className="terminal-name-cont">
                  <p className="terminal-title">Terminal 1</p>
                  <p className="dots">...</p>
                </div>
                <p className="description">
                  Optional metadata <br /> should be two lines.
                </p>
              </div>
            </div>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button className="add-terminal-btn">+ Add New</button>
                }
              >
                {(close) => (
                  <>
                    <div className="popup-bg-cont">
                      <div className="popup-details-container">
                        <input
                          type="text"
                          placeholder="Terminal Title"
                          className="title-input"
                        />
                        <input
                          type="text"
                          placeholder="Description"
                          className="dec-input"
                        />
                        <div className="buttons-cont">
                          <input
                            type="file"
                            id="uploadImage"
                            className="file-input"
                            onChange={handleImageUpload}
                          />
                          <label htmlFor="uploadImage" className="upload-label">
                            <span className="upload-icon">
                              <RiUpload2Fill size={20} />
                            </span>
                            upload image
                          </label>

                          <div>
                            <button className="cancel-btn" onClick={close}>
                              Cancel
                            </button>
                            <button className="continue-btn">Continue</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </div>
          <h3 className="Services-heading">Services</h3>
          <div className="lost-found-cont">
            <p className="Lost-found-para">Lost & found</p>
          </div>
          <div className="container">
            <form className="form">
              <div className="form-group">
                <label htmlFor="serviceName">Service Name</label>
                <input
                  type="text"
                  id="serviceName"
                  className="input"
                  placeholder="Service Name"
                  value="Lost & found"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" className="select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subCategory">Sub Category</label>
                <select id="subCategory" className="select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div className="col-group">
                <input
                  type="file"
                  id="uploadImage"
                  className="file-input"
                  onChange={handleImageUpload}
                />
                <label htmlFor="uploadImage" className="upload-label">
                  <span className="upload-icon">
                    <RiUpload2Fill size={20} />
                  </span>
                  upload image
                </label>
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setShowImage(!showImage)}
                  />
                  <span className="slider"></span>
                  <span className="show-image-text">Show image</span>
                </label>
                <button type="button" className="save-button">
                  Save
                </button>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  className="input-dec"
                  placeholder="type here"
                />
              </div>
            </form>

            <div className="service-list">
              <div className="service-item">Lounge</div>
              <div className="service-item">Money Exchange</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportItemDetails;
