(this.webpackJsonpproject19=this.webpackJsonpproject19||[]).push([[0],{43:function(a,t,e){a.exports=e(53)},48:function(a,t,e){},49:function(a,t,e){},53:function(a,t,e){"use strict";e.r(t);var n=e(0),l=e.n(n),i=e(14),r=e.n(i),o=(e(48),e(38)),c=(e(49),e(30)),u=e(31),s=e(32),h=e(10),d=e(41),p=e(39),m=e(58),E=e(59),f=e(61);var v=function(a){return l.a.createElement(m.a,{size:"lg",centered:!0,show:a.modalShow,onHide:function(){return a.setModalShow(!0)}},l.a.createElement(m.a.Header,null,l.a.createElement(m.a.Title,null,"Data Karyawan")),l.a.createElement(m.a.Body,null,l.a.createElement(E.a.Control,{value:a.dataState.inputNama,onChange:function(t){return a.handleInput("inputNama",t)},type:"text",placeholder:"Masukkan Nama"}),l.a.createElement(E.a.Control,{value:a.dataState.inputJabatan,onChange:function(t){return a.handleInput("inputJabatan",t)},style:{marginTop:"10px",marginBottom:"10px"},type:"text",placeholder:"Masukkan Jabatan"}),l.a.createElement(E.a.Control,{value:a.dataState.inputJk,onChange:function(t){return a.handleInput("inputJk",t)},as:"select",defaultValue:"Pilih..."},l.a.createElement("option",{value:""},"Pilih Jenis Kelamin"),l.a.createElement("option",{value:"Laki-Laki"},"Laki-Laki"),l.a.createElement("option",{value:"Perempuan"},"Perempuan")),l.a.createElement(E.a.Control,{value:a.dataState.inputTl,onChange:function(t){return a.handleInput("inputTl",t)},style:{marginTop:"10px"},type:"date"})),l.a.createElement(m.a.Footer,null,l.a.createElement(f.a,{variant:"secondary",onClick:function(){return a.closeModal()}},"Close"),l.a.createElement(f.a,{variant:"success",onClick:function(){return a.handleSave()}},"Simpan")))},b=e(60),k=e(37),y=e(55),g=e(56),S=e(57),w=function(a){Object(d.a)(e,a);var t=Object(p.a)(e);function e(a){var n;return Object(u.a)(this,e),(n=t.call(this,a)).state={dataTabel:[],valueSearch:"",inputNama:"",inputJabatan:"",inputJkelamin:"",inputTanggal:"",inputId:""},n.handleEdit=n.handleEdit.bind(Object(h.a)(n)),n.handleSave=n.handleSave.bind(Object(h.a)(n)),n.handleInput=n.handleInput.bind(Object(h.a)(n)),n.closeModal=n.closeModal.bind(Object(h.a)(n)),n.clearInput=n.clearInput.bind(Object(h.a)(n)),n.handleDel=n.handleDel.bind(Object(h.a)(n)),n.search=n.search.bind(Object(h.a)(n)),n.tampilData=n.tampilData.bind(Object(h.a)(n)),n}return Object(s.a)(e,[{key:"handleInput",value:function(a,t){this.setState(Object(c.a)({},a,t.target.value))}},{key:"closeModal",value:function(){this.props.setModalShow(!1),this.clearInput()}},{key:"clearInput",value:function(){this.setState({inputNama:"",inputJabatan:"",inputKelamin:"",inputTanggal:"",inputId:""})}},{key:"handleEdit",value:function(a){var t=this;fetch("http://localhost:3000/data-karyawan/".concat(a)).then((function(a){return a.json()})).then((function(a){t.props.setModalShow(!0),t.setState({inputNama:a.nama_karyawan,inputJabatan:a.jabatan,inputKelamin:a.jenis_kelamin,inputTanggal:a.tanggal_lahir,inputId:a.id})}))}},{key:"handleSave",value:function(){var a=this;""===this.state.inputNama||""===this.state.inputJabatan||""===this.state.inputKelamin||""===this.state.inputTanggal?alert("Silahkan Isi Data"):""===this.state.inputId?fetch("http://localhost:3000/data-karyawan",{method:"POST",body:JSON.stringify({nama_karyawan:this.state.inputNama,jabatan:this.state.inputJabatan,jenis_kelamin:this.state.inputKelamin,tanggal_lahir:this.state.inputTanggal}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(a){return a.json()})).then((function(t){console.log(t),a.closeModal(),a.tampilData()})):fetch("http://localhost:3000/data-karyawan/".concat(this.state.inputId),{method:"PUT",body:JSON.stringify({nama_karyawan:this.state.inputNama,jabatan:this.state.inputJabatan,jenis_kelamin:this.state.inputKelamin,tanggal_lahir:this.state.inputTanggal}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(a){return a.json()})).then((function(t){a.tampilData(),a.props.setModalShow(!1),a.clearInput()}))}},{key:"handleDel",value:function(a){var t=this;fetch("http://localhost:3000/data-karyawan/".concat(a),{method:"DELETE"}).then((function(a){alert("Data Terhapus"),t.tampilData()}))}},{key:"search",value:function(a){this.setState({valueSearch:a.target.value})}},{key:"tampilData",value:function(){var a=this;fetch("http://localhost:3000/data-karyawan").then((function(a){return a.json()})).then((function(t){return a.setState({dataTabel:t})}))}},{key:"componentDidMount",value:function(){this.tampilData()}},{key:"render",value:function(){var a=this;return l.a.createElement("div",null,l.a.createElement(b.a,{bg:"secondary"},l.a.createElement(b.a.Brand,{style:{color:"white"}},l.a.createElement("h2",null," ",l.a.createElement("b",null,"DATA KARYAWAN")))),l.a.createElement(E.a,{inline:!0},l.a.createElement(k.a,{style:{marginLeft:"500px",width:"500px"},type:"text",placeholder:"Masukan Nama Karyawan",className:"mr-sm-2",value:this.state.valueSearch,onChange:function(t){return a.search(t)}}),l.a.createElement(f.a,{onClick:function(){return a.props.setModalShow(!0)},variant:"info"},"Tambah Data")),l.a.createElement(y.a,null,l.a.createElement(v,{modalShow:this.props.modalShow,setModalShow:this.props.setModalShow,closeModal:this.closeModal,handleInput:this.handleInput,dataState:this.state,handleSave:this.handleSave,handleEdit:this.handleEdit}),l.a.createElement(g.a,null,l.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:"40px",textAlign:"center"}},l.a.createElement("thead",{style:{fontWeight:"bolder",fontSize:"14px"}},l.a.createElement("tr",null,l.a.createElement("td",null,"NO"),l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"NAMA"),l.a.createElement("td",null,"JABATAN"),l.a.createElement("td",null,"JENIS KELAMIN"),l.a.createElement("td",null,"TANGGAL LAHIR"),l.a.createElement("td",null))),l.a.createElement("tbody",null,this.state.dataTabel.reverse().filter((function(t){return t.nama_karyawan.toLowerCase().includes(a.state.valueSearch)})).map((function(t,e){return l.a.createElement("tr",{key:e},l.a.createElement("td",null,e+1),l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.nama_karyawan),l.a.createElement("td",null,t.jabatan),l.a.createElement("td",null,t.jenis_kelamin),l.a.createElement("td",null,t.tanggal_lahir),l.a.createElement("td",null,l.a.createElement(f.a,{onClick:function(){return a.handleDel(t.id)},variant:"info",size:"sm",style:{margin:"5%"}},"Delete"),l.a.createElement(f.a,{onClick:function(){return a.handleEdit(t.id)},variant:"info",size:"sm"},"Edit")))})))))))}}]),e}(n.Component);var j=function(){var a=l.a.useState(!1),t=Object(o.a)(a,2),e=t[0],n=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(w,{modalShow:e,setModalShow:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.39fc676e.chunk.js.map