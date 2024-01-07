export default function helpReplace(myName, dataObj, refferalObject) {
    let refferalObjectCpy = refferalObject;
    // Replace the property values of refferalMessageObject to dataObject Property values
    // Eg. replace refferalMessageObject.property in which ${employee_name} to dataObj.employee_name value

    for (const property in refferalObjectCpy) {
        for (const myDataProp in dataObj) {
            refferalObjectCpy[property] = refferalObjectCpy[property].replace(
                `#${myDataProp}#`,
                dataObj[myDataProp]
            );
        }
    }

    refferalObjectCpy["signature"] = refferalObjectCpy["signature"].replace(
        "#myName#",
        myName
    );

    console.log(refferalObjectCpy);
}
