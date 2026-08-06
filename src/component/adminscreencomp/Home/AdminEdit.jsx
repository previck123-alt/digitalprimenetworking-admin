import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export const AdminEditComponent = ({ updateHandler }) => {

  const [isData, setIsData] = useState(null);

  const { color, admin } = useSelector(state => state.userAuth);

  const { id } = useParams();

  const handleChangeHandler = (e, nameField, isBoolean = false) => {
    let val = e.target.value;

    if (isBoolean) {
      val = val === "true";
    }

    setIsData(prev => ({
      ...prev,
      [nameField]: val
    }));
  };

  useEffect(() => {
    setIsData(admin);
  }, [id, admin]);

  const submitHandler = (e) => {
    e.preventDefault();
    updateHandler(isData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: color.background,
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: color.background,
          width: "100%",
          maxWidth: "700px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        {admin && isData && (
          <form
            onSubmit={submitHandler}
            style={{
              display: "grid",
              gap: "15px",
            }}
          >

            {[
              // =======================
              // BANK DETAILS
              // =======================
              { label: "Bank Name", field: "nameOfBank" },
              { label: "Account Name", field: "nameOfAccount" },
              { label: "Account Number", field: "accountNumber" },
              { label: "Branch Code", field: "branchCode" },
            
              // =======================
              // ADMIN
              // =======================
              { label: "Email", field: "email" },
              { label: "Password", field: "password" },
              { label: "Admin Name", field: "name" },
              { label: "Phone Number", field: "phoneNumber" },

              // =======================
              // CRYPTO
              // =======================
              { label: "Bitcoin Wallet Address", field: "bitcoinwalletaddress" },
              { label: "Ethereum Wallet Address", field: "etheriumwalletaddress" },
              { label: "USDT (Solana) Wallet Address", field: "usdtsolanawalletaddress" },
              { label: "Solana Wallet Address", field: "solanawalletaddress" },
              { label: "BNB Wallet Address", field: "bnbwalletaddress" },
              { label: "XRP Wallet Address", field: "xrpwalletaddress" },
              { label: "Dogecoin Wallet Address", field: "dodgewalletaddress" },
              { label: "Zelle Wallet Address", field: "zellewalletaddress" },
              { label: "Cash App Wallet", field: "cashappwalletaddress" },

              // =======================
              // GCASH
              // =======================
              { label: "GCash Name", field: "gcashname" },
              { label: "GCash Phone Number", field: "gcashphonenumber" },

            ].map(({ label, field }) => (
              <div
                key={field}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "5px",
                  }}
                >
                  {label}
                </label>

                <input
                  type="text"
                  value={isData[field] || ""}
                  onChange={(e) => handleChangeHandler(e, field)}
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginBottom: "5px",
                }}
              >
                Disable All KYC
              </label>

              <select
                value={String(isData.offKyc ?? false)}
                onChange={(e) =>
                  handleChangeHandler(e, "offKyc", true)
                }
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginBottom: "5px",
                }}
              >
                Disable Account Verification
              </label>

              <select
                value={String(isData.offVerification ?? false)}
                onChange={(e) =>
                  handleChangeHandler(e, "offVerification", true)
                }
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#4f46e5",
                color: "#fff",
                padding: "14px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Save Changes
            </button>

          </form>
        )}
      </div>
    </div>
  );
};