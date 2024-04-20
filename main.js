function removeElement(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const feedbackElement = document.getElementById('dis');
    removeElement(feedbackElement)
    // Collecting form data
    const formData = {
        name: document.getElementById('name').value,
        contact: document.getElementById('Contact').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('Gender').value,
        age: parseInt(document.getElementById('Age').value, 10),
        height: parseInt(document.getElementById('Height').value, 10),
        weight: parseInt(document.getElementById('Weight').value, 10),
        haemoglobin: parseFloat(document.getElementById('Haemoglobin').value),
        systolic: parseInt(document.getElementById('Systolic').value, 10),
        diastolic: parseInt(document.getElementById('Diastolic').value, 10),
        spyrometry: parseFloat(document.getElementById('Spyrometry').value),
        gfr: parseFloat(document.getElementById('Gfr').value),
        dexa: parseFloat(document.getElementById('DEXA').value)
    };

    // Process and display data
    
    //const p=document.createElement('p')
    //const a=document.createElement('p')
    //p.append(formData.name)
    //feedbackElement.append(p)
    //a.append(formData.contact)
    //feedbackElement.append(formData.contact)
    const bmi=document.createElement('p')
    const diab=document.createElement('p')
    const bp=document.createElement('p')
    const spyro=document.createElement('p')
    const glo=document.createElement('p')
    const dex=document.createElement('p')
    var a=0;
    var b=0;
    var l=(formData.weight/formData.height)/formData.height
    if(l<18.5){
        bmi.append('You are Under Weight as per your data.')
    }
    else if(l>=18.5 && l<25){
        bmi.append('You are Healthy as per your data.')
    }
    else if(l>=25 && l<=30){
        bmi.append('You are Over Weight as per your data.')
    }
    else if(l>30){
        bmi.append('You are Obesity as per your data.')
    }
    else{
        bmi.append(' Invalid data for height and weight.')
    }
    if(formData.systolic<120 && formData.diastolic<80){
        bp.append(' Your BP stage is Normal')
        
    }
    else if((formData.systolic>=120 && formData.systolic<129) && formData.diastolic<80){
        bp.append('Your BP stage isElevated')
    }
    else if((formData.systolic>=130 && formData.systolic<139) && (formData.diastolic>=80 && formData.diastolic<89)){
        bp.append('Your BP stage isHypertension Stage-1')
        a=1;
    }
    else if(formData.systolic>=140 && formData.diastolic>=90){
        bp.append('Your BP stage is Hypertension Stage-2')
        a=1;
    }
    else if(formData.systolic>180 && formData.diastolic>120){
        bp.append('Your BP satge is Hypertension Crisis')
        a=1;
    }
    else{
        bp.append(' Invalid data for bp.')
    }
    if(formData.haemoglobin<5.7){
        diab.append('Your diabetes are on stage Normal')
    }
    else if(formData.haemoglobin>=5.7 && formData.haemoglobin<6.4){
        diab.append('Your diabetes are on stage Pre-Diabetes')
        b=1;
    }
    else if(formData.haemoglobin>6.4){
        diab.append('Your diabetes are on stage High-Diabetes')
        b=1;
    }
    else{
        diab.append('Invalid data for diabetes. ')
    }
    if(formData.spyrometry<70){
        spyro.append('You are suffering from COPD')
    }
    else{
        spyro.append('You are not suffering from COPD')
    }
    if(formData.gfr<60){
        glo.append('You are suffering from Chronic Kidney Disease')
    }
    else{
        glo.append('You are not suffering from Chronic Kidney Disease')
    }
    if(formData.dexa>=-1){
        dex.append('Your Osteoporosis stage is Normal')
    }
    else if(formData.dexa>=-2.5 && formData.dexa<-1){
        dex.append('Your Osteoporosis stage is Osteopenia')
    }
    else if(formData.dexa<-2.5){
        dex.append('Your Osteoporosis stage is Osteoporosis')
    }
    else{
        dex.append(' Invalid data for Osteoporosis.')
    }
    
    
    //feedbackElement.innerHTML=`<p>Thank you, ${formData.name}. Your data has been processed. Please wait for further instructions.</p><br><p>You 
    //are ${parseInt(bmi.value)} as per your data.</p>
    //<br> <p>Your BP stage is ${parseInt(bp.value)}.</p>
    //<br><p>Your diabetes are on stage ${parseInt(diab.value)}.</p>
    //<br><P>You are ${parseInt(spyro.value)}</P>
    //<br><p>You are</p>
    //<br><p>Your Osteoporosis stage is ${parseInt(dex.va)}</p>
    //<p> Thank</p>`
    const abc=document.createElement('h1')
    abc.append('Medical Report')
    feedbackElement.append(abc)
    feedbackElement.append(`Thank you, ${formData.name} Your data has been processed. Please wait for further instructions.`)
    feedbackElement.append(bmi)
    feedbackElement.append(bp)
    feedbackElement.append(diab)
    feedbackElement.append(spyro)
    feedbackElement.append(dex)
    feedbackElement.append(glo)
    if(a==1 || b==1){
        const d=document.createElement('h3')
        d.append("Balanced-Diet")
        feedbackElement.append(d);

    }
    if(a==1){
        const ha=document.createElement('h4')
        const ed=document.createElement('ul')
        const li1=document.createElement('li')
        const li2=document.createElement('li')
        const li3=document.createElement('li')
        const li4=document.createElement('li')
        const li5=document.createElement('li')
        ha.append('For Hypertension :-')
        li1.append('Reduced Sodium Intake')
        li2.append('Eat plenty of Fruits and Vegetables')
        li3.append('Include Whole Grains')
        li4.append('Lean Proteins')
        li5.append('Low-fat Dairy')
        ed.append(li1)
        ed.append(li2)
        ed.append(li3)
        ed.append(li4)
        ed.append(li5)
        feedbackElement.append(ha)
        feedbackElement.append(ed)
    }
    if(b==1){
        const ha=document.createElement('h4')
        const ed=document.createElement('ul')
        const li1=document.createElement('li')
        const li2=document.createElement('li')
        const li3=document.createElement('li')
        const li4=document.createElement('li')
        const li5=document.createElement('li')
        ha.append('For Diabetes :-')
        li1.append('Carbohydrate Management')
        li2.append('Fiber-Rich Foods')
        li3.append('Lean Protein')
        li4.append('Healthy Fats')
        li5.append('Limit Sugary Foods and Drinks')
        ed.append(li1)
        ed.append(li2)
        ed.append(li3)
        ed.append(li4)
        ed.append(li5)
        feedbackElement.append(ha)
        feedbackElement.append(ed)
    }
    document.getElementById('userForm').reset();
    document.getElementById('userForm').innerHTML=" "
    // Clearing the feedback element
    //removeElement(feedbackElement);
    
    
    console.log(formData);
});

