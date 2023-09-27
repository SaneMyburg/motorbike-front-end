import '../style/navigation.css'

const NavigationPanel = () => (
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 border-end">
  <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <a href="/" class="d-flex align-items-center pt-5 pb-5 mb-md-0 me-md-auto text-white text-decoration-none">
          <span class="fs-5 d-none d-sm-inline text-black">Motorbick</span>
      </a>
      <ul class="nav nav-pills flex-column mb-sm-auto mt-3 pt-3 mb-0 align-items-center align-items-sm-start" id="menu">
          <li class="nav-item">
              <a href="#" class="nav-link align-middle px-0 .active">
                   <span class="ms-1 d-none d-sm-inline text-black"> New Appointment</span>
              </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link align-middle px-0">
                   <span class="ms-1 d-none d-sm-inline"> MY Appointment</span>
              </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link align-middle px-0">
                   <span class="ms-1 d-none d-sm-inline"> ADD Motorbick</span>
              </a>
          </li>
          
          <li class="nav-item">
              <a href="#" class="nav-link align-middle px-0">
                   <span class="ms-1 d-none d-sm-inline"> Delete Motorbick</span>
              </a>
          </li>
      </ul>
      <hr/>
      <div class="dropdown pb-4">
          <ul>
              <li><a class="" href="#">Sign out</a></li>
          </ul>
      </div>
  </div>
</div>
);

export default NavigationPanel;
