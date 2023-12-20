import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const KontenDashboard = () => {
  return (
    <div>
      <section className="section dashboard">
        <div className="persegi-panjang">
          {/* <!-- Baris Pertama --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="row m-3 mt-5">
                {/* <!-- pendapatan Card --> */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card info-card first-card">
                    <div className="card-body">
                      <div className="card-icon rounded-circle mt-3 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-coins"></i>
                      </div>
                      <h5 className="card-title">Pendapatan</h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>RP 1.270.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End pendapatan Card --> */}

                {/* <!-- user Card --> */}
                <div className="col-xxl-3 col-xl-12">
                  <div className="card info-card first-card">
                    <div className="card-body">
                      <div className="card-icon mt-3 rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <h5 className="card-title">
                        Pengguna <span>| All</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>155</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End user Card --> */}

                {/* <!-- dokter Card --> */}
                <div className="col-xxl-3 col-xl-12">
                  <div className="card info-card first-card">
                    <div className="card-body">
                      <div className="card-icon mt-3 rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-user-doctor"></i>
                      </div>
                      <h5 className="card-title">
                        Pengguna <span>| Dokter</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>47</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End dokter Card --> */}

                {/* <!-- konsultasi Card --> */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card info-card first-card">
                    <div className="card-body">
                      <div className="card-icon mt-3 rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-notes-medical"></i>
                      </div>
                      <h5 className="card-title">Total Konsultasi</h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>129</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End konsultasi Card --> */}
              </div>
            </div>
          </div>
          {/* <!-- baris pertama end --> */}

          {/* <!-- Baris Kedua --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="row m-3">
                {/* <!-- Edukasi Card --> */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card info-card second-card">
                    <div className="card-body">
                      <div className="card-icon rounded-circle mt-3 d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-newspaper"></i>
                      </div>
                      <h5 className="card-title">Total Konten Edukasi</h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>17</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Edukasi Card --> */}

                {/* <!-- Edukasi kiriman Card --> */}
                <div className="col-xxl-3 col-xl-12">
                  <div className="card info-card second-card">
                    <div className="card-body">
                      <div className="card-icon mt-3 rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-file-lines"></i>
                      </div>
                      <h5 className="card-title">Total Kiriman Edukasi</h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>197</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Edukasi kiriman Card --> */}

                {/* <!-- produk Card --> */}
                <div className="col-xxl-3 col-xl-12">
                  <div className="card info-card second-card">
                    <div className="card-body">
                      <div className="card-icon mt-3 rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-bag-shopping"></i>
                      </div>
                      <h5 className="card-title">Total Produk Rekomendasi</h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>38</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End produk Card --> */}

                {/* <!-- Konsultasi Card --> */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card info-card second-card">
                    <div className="card-body">
                      <div className="card-icon mt-3 rounded-circle d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-house-medical"></i>
                      </div>
                      <h5 className="card-title">Total Info Vet</h5>

                      <div className="d-flex align-items-center">
                        <div className="">
                          <h6>17</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Konsultasi Card --> */}
              </div>
            </div>
          </div>
          {/* <!-- baris Kedua end --> */}

          {/* <!-- Baris Ketiga --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="row m-3">
                {/* <!-- Bar Chart Pendapatan--> */}
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Pendapatan</h5>
                      <h3 style="font-weight: bold">Rp. 1.270.000</h3>

                      <canvas id="barChart" style="max-height: 400px"></canvas>
                      <script>
                        document.addEventListener("DOMContentLoaded", () ={" "}
                        {
                          new Chart(document.querySelector("#barChart"), {
                            type: "bar",
                            data: {
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [
                                {
                                  label: "Bar Chart",
                                  data: [65, 59, 80, 81, 56, 55, 40],
                                  backgroundColor: [
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(255, 159, 64, 0.2)",
                                    "rgba(255, 205, 86, 0.2)",
                                    "rgba(75, 192, 192, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(153, 102, 255, 0.2)",
                                    "rgba(201, 203, 207, 0.2)",
                                  ],
                                  borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                  borderWidth: 1,
                                },
                              ],
                            },
                            options: {
                              scales: {
                                y: {
                                  beginAtZero: true,
                                },
                              },
                            },
                          })
                        }
                        )
                      </script>
                    </div>
                  </div>
                </div>
                {/* <!-- End Bar CHart --> */}

                {/* <!-- Radial Bar Chart --> */}
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Pengguna</h5>

                      <div id="radialBarChart"></div>

                      <script>
                        document.addEventListener("DOMContentLoaded", () ={" "}
                        {new ApexCharts(document.querySelector("#radialBarChart"), {
                          series: [44, 55, 67, 83],
                          chart: {
                            height: 350,
                            type: "radialBar",
                            toolbar: {
                              show: true,
                            },
                          },
                          plotOptions: {
                            radialBar: {
                              dataLabels: {
                                name: {
                                  fontSize: "22px",
                                },
                                value: {
                                  fontSize: "16px",
                                },
                                total: {
                                  show: true,
                                  label: "Total",
                                  formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 249;
                                  },
                                },
                              },
                            },
                          },
                          labels: ["Apples", "Oranges", "Bananas", "Berries"],
                        }).render()}
                        )
                      </script>
                    </div>
                  </div>
                </div>
                {/* <!-- End Radial Bar Chart --> */}
              </div>
            </div>
          </div>
          {/* <!-- baris ketiga end --> */}
        </div>
      </section>
    </div>
  );
};

export default KontenDashboard;
